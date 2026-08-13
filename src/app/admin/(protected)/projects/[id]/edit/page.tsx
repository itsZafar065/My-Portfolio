import { ProjectForm } from "@/components/project-form";
import { connectDb, toPlain } from "@/lib/db";
import { Project } from "@/models/Content";

export default async function EditProject({ params }: { params: Promise<{ id: string }> }) {
  await connectDb();
  const { id } = await params;
  const project = toPlain(await Project.findById(id).lean());
  return <><h1>Edit project</h1><ProjectForm project={project} /></>;
}
