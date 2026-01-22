import { Profile, profile } from './profile';
import { Experience, experience } from './experience';
import { Project, projects } from './projects';
import { Skills, skills } from './skills';
import { Education, education } from './education';
import { Certification, certifications } from './certifications';

interface Resume {
  profile: Profile;
  experience: Experience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  certifications: Certification[];
}

export const RESUME: Resume = {
  profile,
  experience,
  projects,
  skills,
  education,
  certifications
};
