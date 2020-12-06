import { getColorFromStatus, getLabelFromStatus } from './Status.util'

test('success status should return primary color', () => {
  expect(getColorFromStatus("success")).toBe("primary");
});

test('in_progress status should return secondary color', () => {
  expect(getColorFromStatus("in_progress")).toBe("secondary");
});

test('other status should return secondary color', () => {
  expect(getColorFromStatus("other")).toBe("default");
});

test('success status should return primary color', () => {
  expect(getLabelFromStatus("success")).toBe("Succès");
});

test('in_progress status should return secondary color', () => {
  expect(getLabelFromStatus("in_progress")).toBe("En cours");
});

test('other status should return secondary color', () => {
  expect(getLabelFromStatus("failed")).toBe("Echec");
});

test('other status should return secondary color', () => {
  expect(getLabelFromStatus("other")).toBe("");
});