"use client"

import { RefObject } from "react"

import InView from "@/app/hoc/in-view"
import useViewportClassName from "@/app/hooks/use-viewport-classname"

type TimelineItemType = {
  date: string
  company: string
  jobTitle: string
  description: string[]
}

const items: TimelineItemType[] = [
  {
    date: "MAR 2023",
    company: "Andercore",
    jobTitle: "Lead Fullstack Engineer",
    description: [
      "Developing the tech foundations for both the backend and frontend using cutting edge options that reduced time to market",
      "Frontend individual contributor",
    ],
  },
  {
    date: "OCT 2021",
    company: "Cazoo",
    jobTitle: "Fullstack Engineer",
    description: [
      "Led micro-frontend solution in the company",
      "Responsible for a few initiatives in the new EU markets",
      "Added observability tooling to our frontends",
    ],
  },
  {
    date: "DEC 2019",
    company: "Talkdesk",
    jobTitle: "Software Engineer II",
    description: [
      "Full-stack development of two reporting apps (live and historical data), with frontend focus",
      "Won one of the company's hackathons",
    ],
  },
  {
    date: "MAR 2019",
    company: "Sway",
    jobTitle: "Frontend Engineer",
    description: [
      "Revamped the company's website",
      "Developed new features on the company's web-app",
      "Ported a nutrition company's legacy website to ReactJS",
    ],
  },
  {
    date: "JAN 2018",
    company: "NTT Data",
    jobTitle: "Backend Engineer",
    description: [
      "MaaS solution for electronic tolling using a micro-service architecture",
    ],
  },
  {
    date: "SEP 2017",
    company: "Epimetheus",
    jobTitle: "ITC Trainee",
    description: [
      "Legacy banking application maintenance",
      "RPA solution development for supply-chain",
    ],
  },
]

const TimelineItem = ({
  jobTitle,
  date,
  company,
  description,
  index,
}: TimelineItemType & { index: number }) => {
  return (
    <InView
      className={[
        "animate-bounce",
        "duration-1000",
        `${index % 2 === 0 ? "slideInRight" : "slideInLeft"}`,
      ]}
    >
      <div className="card-radiant hoverable flex flex-col rounded-md">
        <div className="flex justify-between rounded-md">
          <h3 className="bg-gradient-to-br from-c2 to-c3 bg-clip-text text-xl font-semibold tracking-wide text-transparent">
            {jobTitle}
          </h3>
          <div className="text-md ml-2 flex shrink-0 flex-col items-center text-center font-semibold tracking-wide text-c1 md-max:text-sm">
            <h3 className="font-semibold tracking-tighter text-c3 md-max:p-1">
              {company}
            </h3>
            <time className="mt-1 text-xs font-semibold uppercase tracking-wide text-c4">
              {date}
            </time>
          </div>
        </div>

        <div className="flex flex-1 flex-col justify-center">
          {description.map((d) => (
            <p key={d} className="mt-2 max-w-lg text-sm md-max:text-xs">
              {d}
            </p>
          ))}
        </div>
      </div>
    </InView>
  )
}

const Timeline = () => (
  <section className="flex justify-center text-c4">
    <div className="mx-auto px-4 py-12">
      <div className="mx-4 grid gap-4 md:grid-cols-6">
        <div className="col-span-12 space-y-6 px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {items.map((t, index) => (
              <TimelineItem key={t.company} {...t} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Timeline
