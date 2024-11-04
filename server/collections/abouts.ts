// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const AboutsCollection: CollectionConfig = {
  slug: "abouts",
  labels: {
    singular: {en: "About", ar: "عنا"},
    plural: {en: "About", ar: "عنا"}
  },
  admin: {group: {en: "Website Content", ar: "محتوى الموقع"}},
  fields: [
    {
      label: {en: "Title", ar: "العنوان"},
      type: "text",
      name: "title",
      required: true,
      localized: true
    },
    {
      label: {en: "Description", ar: "الوصف"},
      type: "textarea",
      name: "description",
      required: true,
      localized: true
    }
  ]
}

export default AboutsCollection
