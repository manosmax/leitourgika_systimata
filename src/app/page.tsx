import { Section } from "@/components/Section";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="mb-14 border-b border-(--border) pb-12">
        <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-widest text-(--accent)">
          4th year · Winter semester
        </div>
        <h1 className="mb-4 text-4xl font-light leading-tight">Operating Systems</h1>
        <p className="text-(--muted)">
          This operating systems course covers the fundamentals of OS design and implementation practices.
          In the duration of this course, students will get involved in hands-on labs developing modules for the
          Linux kernel and the xv6 educational operating system, as well as implementing low level parts of an educational OS called SkylOS. 
        </p>
        <p className="text-(--muted)">
          Prequisites are yada yada... lets write about the vm - and include a link to the guide - and simple assembly - also link to some simple guide and exercises.
        </p>
      </div>

      <Section label="01 · First Handout" title="Memory Management">
        <p className="text-(--muted)">
          This is the first handout. <Link href="/handouts/Memory_Management" className="text-(--accent) hover:underline">View Handout</Link>
        </p>
        <pre className="mt-4 overflow-x-auto rounded-md border border-(--border) bg-(--surface) p-4 font-mono text-xs">
          <code>npm install next</code>
        </pre>
      </Section>

      <Section label="02 · Second Handout" title="Interrupts">
        <p className="text-(--muted)">
          This is the second handout. <Link href="/handouts/Interrupts" className="text-(--accent) hover:underline">View Handout</Link>
        </p>
        <pre className="mt-4 overflow-x-auto rounded-md border border-(--border) bg-(--surface) p-4 font-mono text-xs">
          <code>npm install next</code>
        </pre>
      </Section>
    </>
  );
}