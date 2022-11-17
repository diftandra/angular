export interface Worker {
  id: number;
  name: string;
  phone: string;
  skill: string;
  notes: string;
}

export class WorkerModel {
  constructor(
    public name: string,
    public phone: string,
    public skill: string,
    public notes: string
  ) {}
}
