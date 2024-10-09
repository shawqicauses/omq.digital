// DONE REVIEWING: GITHUB COMMIT - 01
import {CollectionConfig} from "payload/types"

const ServicesCollection: CollectionConfig = {
  slug: "services",
  labels: {
    singular: {en: "Service", ar: "خدمة"},
    plural: {en: "Services", ar: "خدمات"}
  },
  admin: {group: {en: "Website Content", ar: "محتوى الموقع"}},
  upload: {
    staticURL: "/media",
    staticDir: "media",
    mimeTypes: ["image/png", "image/jpeg", "image/svg"],
    imageSizes: [
      {
        name: "icon",
        width: 24,
        height: 24,
        position: "center"
      }
    ]
  },
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
