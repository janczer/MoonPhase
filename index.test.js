const MoonPhase = require('./index')

test('Should create new instance and return the same date', () => {
  const date = new Date();
  const m = new MoonPhase(date);
  expect(m.date).toBe(date);
});

test('Should be 100% illumination', () => {
  const date = new Date(2018, 9, 25, 4, 52);
  const m = new MoonPhase(date);
  expect((Number(m.illum)).toFixed(3)).toBe('0.998');
  expect(m.phaseName()).toBe('Full Moon');
});

test('Should be New Moon', () => {
  const date = new Date(2018, 9, 9, 20, 1);
  const m = new MoonPhase(date);
  expect(m.phaseName()).toBe('New Moon');
});

test('Should be First Quarter', () => {
  const date = new Date(2018, 9, 17, 1, 14);
  const m = new MoonPhase(date);
  expect(m.phaseName()).toBe('First Quarter');
});

test('Should return the next New Moon Date', () => {
  const date = new Date(Date.UTC(2018, 9, 17, 1, 14));
  const m = new MoonPhase(date);
  const dateNewMoon = new Date(m.newMoon * 1000);
  const expectedDate = new Date(Date.UTC(2018, 9, 9, 3, 47, 50, 457));
  expect(dateNewMoon.getTime()).toBe(expectedDate.getTime());
});

test('Should return the age of moon', () => {
  const date = new Date(2018, 9, 17, 12, 46);
  const m = new MoonPhase(date);
  expect((Number(m.age)).toFixed(3)).toBe('8.000');
});

