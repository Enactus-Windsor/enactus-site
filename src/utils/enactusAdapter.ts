import type { EnactusMember } from "@/types/enactus";

export function splitName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  if (parts.length === 1) return { firstName: parts[0], lastName: "" };
  return { firstName: parts.slice(0, -1).join(" "), lastName: parts.at(-1)! };
}

export function toTeamCardMember(m: EnactusMember) {
  const { firstName, lastName } = splitName(m.name);
  return {
    name: m.name,
    firstName,
    lastName,
    role: m.role,
    program: m.major ?? "",    
    year: "",                  
    joined: "",                
    image: m.image ?? "",
    linkedin: m.linkedin ?? "",
    department: m.department ?? "",
  };
}
