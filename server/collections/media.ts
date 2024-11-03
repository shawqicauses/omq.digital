// DONE REVIEWING: GITHUB COMMIT - 02
import {CollectionConfig} from "payload/types"

const MediaCollection: CollectionConfig = {
  slug: "media",
  labels: {
    singular: {en: "Media", ar: "وسائط"},
    plural: {en: "Media", ar: "وسائط"}
  },
  access: {read: () => true},
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
        position: "centre"
      },
      {
        name: "thumbnail",
        width: 768,
        height: 1024,
        position: "centre"
      },
      {
        name: "thumbnail_tablet",
        width: 1024,
        height: undefined,
        position: "centre"
      }
    ]
  },
  fields: [
    {
      label: {en: "Name", ar: "الاسم"},
      type: "text",
      name: "name",
      required: true,
      localized: true
    }
  ]
}

export default MediaCollection
