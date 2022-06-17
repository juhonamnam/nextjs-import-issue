export interface IToDoDto {
  id?: number;
  name?: string;
  content?: string;
  crer?: string;
  creYmd?: string;
  modr?: String;
  modYmd?: string;
}

export interface ISearchPayload {
  paginate?: {
    offset?: number;
    limit?: number;
    total?: number;
  };
}
