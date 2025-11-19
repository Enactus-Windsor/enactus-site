// src/types/enactus.ts
export type EnactusMember = {
  name: string;          
  role: string;          
  department?: string;     
  major?: string;
  linkedin?: string;
  image?: string;          
};

export type EnactusTeam = {
  name: string;            
  banner?: string;         
  members: EnactusMember[];
};
