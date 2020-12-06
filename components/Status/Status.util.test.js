import { getColorFromStatus } from './Status.util'

test('success status should return primary color', () => {
  expect(getColorFromStatus("success")).toBe("primary");
});

test('in_progress status should return secondary color', () => {
  expect(getColorFromStatus("in_progress")).toBe("secondary");
});

test('other status should return secondary color', () => {
  expect(getColorFromStatus("other")).toBe("default");
});