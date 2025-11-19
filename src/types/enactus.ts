import type { StaticImageData } from "next/image";
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

export interface EnactusProject {
  name: string;           
  banner: string | StaticImageData;        
  summary: string;        
  overview: string;       
  departmentLead: string; 
  members?: EnactusMember[]; 
}