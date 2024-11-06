// DONE REVIEWING: GITHUB COMMIT - 07
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
      labels: {singular: {en: "Package", ar: "باقة"}, plural: {en: "Packages", ar: "باقات"}},
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
          labels: {
            singular: {en: "Offering", ar: "العرض"},
            plural: {en: "Offerings", ar: "العروض"}
          },
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
              labels: {
                singular: {en: "Feature", ar: "مميزة"},
                plural: {en: "Features", ar: "مميزات"}
              },
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
            },
            {
              label: {en: "Pricing", ar: "التسعيرة"},
              type: "group",
              name: "pricing",
              localized: false,
              fields: [
                {
                  label: {en: "From", ar: "من"},
                  type: "number",
                  name: "pricing_from",
                  min: 1,
                  required: true,
                  localized: false
                },
                {
                  label: {en: "To", ar: "إلى"},
                  type: "number",
                  name: "pricing_to",
                  min: 1,
                  required: true,
                  localized: false
                }
              ]
            }
          ]
        },
        {
          label: {en: "Pricing", ar: "التسعيرة"},
          type: "group",
          name: "pricing",
          localized: false,
          fields: [
            {
              label: {en: "From", ar: "من"},
              type: "number",
              name: "pricing_from",
              min: 1,
              required: true,
              localized: false
            },
            {
              label: {en: "To", ar: "إلى"},
              type: "number",
              name: "pricing_to",
              min: 1,
              required: true,
              localized: false
            }
          ]
        }
      ]
    },
    {
      label: {en: "Notes", ar: "الملاحظات"},
      labels: {singular: {en: "Note", ar: "ملاحظة"}, plural: {en: "Notes", ar: "ملاحظات"}},
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
