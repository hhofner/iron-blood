const { lines, prefectures } = require("japan-train-data");

console.log("lines", lines[0]);
const trains = [
  ...lines.map((line) => ({
    trainId: `${line.id}`,
    name: line.name,
    prefectureId: line.prefecture.id,
    stations: line.stations.map((station) => ({
      stationId: station.id,
      name: station.name,
    })),
  })),
];

// get rid of duplicates
const uniqueTrains = trains.filter(
  (train, index, self) =>
    index === self.findIndex((t) => t.trainId === train.trainId)
);

const prefectureList = [
  ...prefectures.map((prefecture) => ({
    prefectureId: `${prefecture.id}`,
    name: prefecture.name,
  })),
];

module.exports = {
  user: [],
  password: [],
  note: [],
  train: uniqueTrains,
  interested: [],
  ridden: [],
  prefectures: prefectureList,
};
