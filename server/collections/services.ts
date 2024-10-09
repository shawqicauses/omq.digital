// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const ServicesCollection: CollectionConfig = {
  slug: "services",
  labels: {
    singular: {en: "Service", ar: "خدمة"},
    plural: {en: "Services", ar: "خدمات"}
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

export default ServicesCollection
