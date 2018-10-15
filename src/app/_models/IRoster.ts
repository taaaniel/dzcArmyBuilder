export interface IRoster {
  gameSize: string;
  armySize: number;
  armyName: string;
}

export const CreateEmptyRosterInView: () => IRoster = () => ({
  gameSize: '',
  armySize: 0,
  armyName: '',
});
