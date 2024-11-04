// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const PortfoliosCollection: CollectionConfig = {
  slug: "portfolios",
  labels: {
    singular: {en: "Portfolio", ar: "عمل"},
    plural: {en: "Portfolios", ar: "أعمال"}
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
      label: {en: "Client Name", ar: "اسم العميل"},
      type: "text",
      name: "client_name",
      required: true,
      localized: true
    },
    {
      label: {en: "Client Title", ar: "لقب العميل"},
      type: "text",
      name: "client_title",
      required: true,
      localized: true
    },
    {
      label: {en: "Client Testimonial", ar: "شهادة العميل"},
      type: "textarea",
      name: "client_testimonial",
      required: true,
      localized: true
    },
    {
      label: {en: "Website", ar: "الموقع"},
      type: "text",
      name: "website",
      required: true,
      localized: true
    },
    {
      label: {en: "Image", ar: "الصورة"},
      type: "upload",
      relationTo: "media",
      name: "image",
      required: true,
      localized: false
    }
  ]
}

export default PortfoliosCollection
