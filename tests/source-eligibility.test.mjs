import assert from "node:assert/strict";
import test from "node:test";
import { answer } from "../dist/app.js";

const warrantyOld = {
  id: "warranty-old", revision: "1", topic: "warranty", state: "archived",
  text: "Warranty lasts 1 month."
};
const shippingCurrent = {
  id: "shipping-current", revision: "1", topic: "shipping", state: "active",
  text: "Shipping takes 3 days."
};
const warrantyCurrent = {
  id: "warranty-current", revision: "2", topic: "warranty", state: "active",
  text: "Warranty lasts 12 months."
};

test("policy selects active warranty source after archived source", () => {
  const modelSources = [];
  let lookupCalls = 0;
  const result = answer({ kind: "policy", topic: "warranty" }, {
    documents: [warrantyOld, shippingCurrent, warrantyCurrent],
    lookup: () => { lookupCalls++; return undefined; },
    model: source => { modelSources.push(source); return `Policy: ${source.text}`; }
  });

  assert.equal(result.status, "ok");
  assert.equal(result.text, "Policy: Warranty lasts 12 months.");
  assert.deepEqual(result.citations, ["warranty-current"]);
  assert.equal(modelSources.length, 1);
  assert.deepEqual(modelSources[0], warrantyCurrent);
  assert.equal(lookupCalls, 0);
});

test("policy refuses archived-only warranty sources without dependency calls", () => {
  const modelSources = [];
  let lookupCalls = 0;
  const result = answer({ kind: "policy", topic: "warranty" }, {
    documents: [warrantyOld, shippingCurrent],
    lookup: () => { lookupCalls++; return undefined; },
    model: source => { modelSources.push(source); return `Policy: ${source.text}`; }
  });

  assert.equal(result.status, "refused");
  assert.deepEqual(result.citations, []);
  assert.equal(modelSources.length, 0);
  assert.equal(lookupCalls, 0);
});
