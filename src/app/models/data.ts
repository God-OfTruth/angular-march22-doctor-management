
export type DocSummary = {
  totalCount: number;
  category: Record<string, number>;
};

export type DocCategory = {
  name: string;
  specialization : string; 
};

type Specialization = {
  name: string;
  value: number;
}

export type DoctorSummary = {
  totalCount: number;
  categories: Specialization[]
}