// DONE REVIEWING: GITHUB COMMIT - 04
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
    },
    {
      label: {en: "Icon", ar: "الأيقونة"},
      type: "upload",
      relationTo: "media",
      name: "icon",
      required: true,
      localized: false
    },
    {
      label: {en: "Packages", ar: "الباقات"},
      type: "array",
      name: "packages",
      required: false,
      localized: false,
      fields: [
        {
          label: {en: "Title", ar: "العنوان"},
          type: "text",
          name: "title",
          required: true,
          localized: true
        },
        {
          label: {en: "Offerings", ar: "العروض"},
          type: "array",
          name: "offerings",
          required: true,
          localized: false,
          fields: [
            {
              label: {en: "Title", ar: "العنوان"},
              type: "text",
              name: "title",
              required: true,
              localized: true
            },
            {
              label: {en: "Features", ar: "المميزات"},
              type: "array",
              name: "features",
              required: true,
              localized: false,
              fields: [
                {
                  label: {en: "Title", ar: "العنوان"},
                  type: "text",
                  name: "title",
                  required: true,
                  localized: true
                }
              ]
            }
          ]
        }
      ]
    },
    {
      label: {en: "Notes", ar: "الملاحظات"},
      type: "array",
      name: "notes",
      required: false,
      localized: false,
      fields: [
        {
          label: {en: "Title", ar: "العنوان"},
          type: "text",
          name: "title",
          required: true,
          localized: true
        }
      ]
    }
  ]
}

export default ServicesCollection
