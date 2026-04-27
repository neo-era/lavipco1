import { defineDocumentType, makeSource } from 'contentlayer2/source-files'

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: 'projects/**/*.md',
  fields: {
    title: { type: 'string', required: true },
    value: { type: 'string' },
    client: { type: 'string' },
    year: { type: 'string' },
    location: { type: 'string' },
    description: { type: 'string' },
    image: { type: 'string' },
  },
}))

export const Service = defineDocumentType(() => ({
  name: 'Service',
  filePathPattern: 'services/**/*.md',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string' },
  },
}))

export const TeamMember = defineDocumentType(() => ({
  name: 'TeamMember',
  filePathPattern: 'team/**/*.md',
  fields: {
    name: { type: 'string', required: true },
    position: { type: 'string' },
    specialty: { type: 'string' },
    experience: { type: 'string' },
    photo: { type: 'string' },
  },
}))

export const Certificate = defineDocumentType(() => ({
  name: 'Certificate',
  filePathPattern: 'certificates/**/*.md',
  fields: {
    title: { type: 'string', required: true },
    number: { type: 'string' },
    date: { type: 'string' },
    image: { type: 'string' },
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Project, Service, TeamMember, Certificate],
})