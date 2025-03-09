export interface teamMember {
    id: string,
    image: string,
    name: string, 
    role: 'Frontend Developer' | 'Backend Developer' | 'UI/UX Designer',
    course: 'Computer Science' | 'Information Technology' | 'Information Systems' ,
    experience: string
}