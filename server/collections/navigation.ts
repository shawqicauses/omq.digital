// DONE REVIEWING: GITHUB COMMIT 1️⃣
import {CollectionConfig} from "payload/types"

const navigationCollection: CollectionConfig = {
  slug: "navigations",
  labels: {
    singular: {en: "Navigation", ar: "التنقل"},
    plural: {en: "Navigations", ar: "التنقلات"}
  },
  admin: {group: {en: "Website Content", ar: "محتوى الموقع"}},
  fields: [
    {
      label: {en: "Name", ar: "الاسم"},
      type: "text",
      name: "name",
      required: true,
      localized: true
    },
    {
      label: {en: "URL", ar: "الرابط"},
      type: "text",
      name: "href",
      required: true
    }
  ]
}

export default navigationCollection
