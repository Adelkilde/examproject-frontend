export interface Participant {
  id: number;
  name: string;
  gender: Gender;
  dateOfBirth: Date;
  club: string;
  disciplines: Discipline[];
}

export interface Discipline {
  id: number;
  name: string;
  resultType: string;
  participants: Participant[];
  results: Result[];
}

export interface Result {
  id: number;
  date: Date;
  resultValue: string;
  participant: Participant;
  discipline: Discipline;
}

export enum Gender {
  MALE = "MALE",
  FEMALE = "FEMALE",
}
