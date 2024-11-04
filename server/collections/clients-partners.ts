// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const ClientsPartnersCollection: CollectionConfig = {
  slug: "clients-partners",
  labels: {
    singular: {en: "Client or Partner", ar: "عميل أو شريك"},
    plural: {en: "Clients and Partners", ar: "عملاء وشركاء"}
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
      label: {en: "Category", ar: "الفئة"},
      type: "select",
      name: "category",
      required: true,
      localized: false,
      options: [
        {label: {en: "Client", ar: "عميل"}, value: "client"},
        {label: {en: "Partner", ar: "شريك"}, value: "partner"}
      ]
    },
    {
      label: {en: "Logo", ar: "الشعار"},
      type: "upload",
      relationTo: "media",
      name: "logo",
      required: true,
      localized: false
    }
  ]
}

export default ClientsPartnersCollection
