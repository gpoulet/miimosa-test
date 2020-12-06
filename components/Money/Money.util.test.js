import { getProgressValue, getPercentValue, getColorFromStatus } from './Money.util';

test('1000 collected for 1000 target should return 100% on progress bar', () => {
  expect(getProgressValue(1000, 1000)).toBe(100);
});

test('20 collected for 1000 target should return 2% on progress bar', () => {
  expect(getProgressValue(20, 1000)).toBe(2);
});

test('2000 collected for 1000 target should return 100% on progress bar', () => {
  expect(getProgressValue(2000, 1000)).toBe(100);
});


test('1000 collected for 1000 target should return 100% on text', () => {
  expect(getPercentValue(1000, 1000)).toBe(100);
});

test('20 collected for 1000 target should return 2% on text', () => {
  expect(getPercentValue(20, 1000)).toBe(2);
});

test('2000 collected for 1000 target should return 100% on text', () => {
  expect(getPercentValue(2000, 1000)).toBe(200);
});


test('success status should return primary color', () => {
  expect(getColorFromStatus("success")).toBe("primary");
});

test('in_progress status should return secondary color', () => {
  expect(getColorFromStatus("in_progress")).toBe("secondary");
});

test('other status should return secondary color', () => {
  expect(getColorFromStatus("other")).toBe("secondary");
});