// DONE REVIEWING: GITHUB COMMIT
import {CollectionConfig} from "payload/types"

const TeamMembersCollection: CollectionConfig = {
  slug: "team-members",
  labels: {
    singular: {en: "Team Member", ar: "عضو فريق"},
    plural: {en: "Team Members", ar: "أعضاء الفريق"}
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
      label: {en: "Email", ar: "البريد الإلكتروني"},
      type: "email",
      name: "email",
      required: true,
      localized: false
    },
    {
      label: {en: "Role", ar: "الدور"},
      type: "text",
      name: "role",
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

export default TeamMembersCollection
