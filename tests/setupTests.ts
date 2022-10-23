jest.useFakeTimers().setSystemTime(new Date("2022-10-10"));

jest.mock("../src/platformSelect", () => ({
  platformSelect: (select: any) => select,
}));
