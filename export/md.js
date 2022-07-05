const fs = require("fs")
const path = require("path")
const config = require("../src/data/resume.json")
const filePath = path.resolve(__dirname, "../README.md")
const md5 = require("md5")

const fullName = config.name + " " + config.lastName
const avatarUrl = `https://www.gravatar.com/avatar/${md5(config.email)}?s=200`

const resume = `
<img src="${avatarUrl}" alt="${fullName}" style="border-radius: 10px;" />

# ${fullName}

${config.summary}

<p align="left">
    <a href="${config.links.linkedin}" target="_new">LinkedIn</a> ●
    <a href="${config.links.github}" target="_new">GitHub</a> ●
    <a href="${config.links.twitter}" target="_new">Twitter</a>
</p>

- **Location:** ${config.location.city}, ${config.location.country}
- **Phone:** [${config.phoneNumber}](tel:${config.phoneNumber.replace(/\s/g, "")})
- **Email:** [${config.email}](mailto:${config.email})

## Highlight Skills

${Object.keys(config.skills)
  .map(category => {
    return `### ${category}\n${config.skills[category]
      .map(skill => {
        return `- ${skill.name} _(${skill.level})_`
      })
      .join("\n")}`
  })
  .join("\n\n")}

## Experiences

${config.experiences
  .filter(item => !item.hidden)
  .map(experience => {
    const { title, span, company, location, description } = experience
    return `### ${title} _at ${company}_\n${location}\n_${span.from} - ${span.to}_\n${description}`
  })
  .join("\n\n")}

## Honors

${config.honors
  .filter(item => !item.hidden)
  .map(honor => {
    const { rank, field, year, location } = honor
    return `### ${rank} _at ${field}_\n${year}, ${location}\n\n_${honor.in}_`
  })
  .join("\n\n")}

## Education

${config.education
  .filter(item => !item.hidden)
  .map(edu => {
    const { name, location, span, field, degree } = edu
    return `### ${name}\n\n${degree} of **${field}**\n\n${location.city}, ${location.country} _(${span.from} - ${span.to})_`
  })
  .join("\n\n")}
`

fs.writeFileSync(filePath, resume, {
  flag: "w"
})
