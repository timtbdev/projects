import { FC } from "react"
import { formatDate } from "@/libs/utils"

import {
  ProjectBrowser,
  ProjectContainer,
  ProjectDate,
  ProjectFeatures,
  ProjectHeader,
  ProjectLine,
  ProjectScreenShot,
} from "./sub-components"
import { Project } from "contentlayer/generated"
import {v4} from "uuid"

interface ProjectProps {
  project: Project,
  line: boolean
}

const Project: FC<ProjectProps> = ({
  project,
  line,
}) => {



  return (
    <>
      <div className="mx-auto max-w-5xl px-4 sm:px-8">
        {/* Body */}
        <ProjectDate year={formatDate(project.date)} />
        <ProjectLine />
        <ProjectBrowser key={v4()} url={project.url ? project.url : ""}>
          <ProjectContainer>
            <div className="overflow-hidden">
              <ProjectHeader title={project.title} tags={project?.tags ? project?.tags : []} icon={project.icon ? project.icon : ""} />
              <ProjectFeatures features={project.features} />
            </div>
            <ProjectScreenShot screenshot={project.screenshot ? project.screenshot : ""} />
          </ProjectContainer>
        </ProjectBrowser>
      </div>
      {!line && <ProjectLine />}
    </>
  )
}

export default Project