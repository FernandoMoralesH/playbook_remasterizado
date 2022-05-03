const MissionCommander = require('./../app/missionCommander');

describe("Unit Tests for Mission Commander Class", () => {
    test('1) Create a mission commander objet', () => {
        const fer = new MissionCommander ("Fernanda Ochoa")
        /*const myMissionCommander = new MissionCommander("Woppa")
        expect(myMissionCommander.name).toBe("Woppa");*/
        expect(fer.name).toBe("Fernanda Ochoa");

    });
  })
  