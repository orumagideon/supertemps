function OrgChart() {
  return (
    <div className="card-base overflow-x-auto">
      <div className="min-w-[700px] py-6">
        <div className="mx-auto w-fit rounded-2xl bg-[#0f1e45] px-5 py-3 text-sm font-semibold text-white">Chairperson</div>
        <div className="mx-auto h-8 w-px bg-slate-300" />
        <div className="mx-auto w-fit rounded-2xl bg-[#1f3f87] px-5 py-3 text-sm font-semibold text-white">Team Leader / Director</div>

        <div className="mx-auto mt-6 h-8 w-[78%] border-x border-t border-slate-300" />
        <div className="grid grid-cols-4 gap-4 px-8">
          {['HR Manager', 'Quality Assurance Manager', 'Marketing & Corporate Communication', 'Finance'].map((role) => (
            <div key={role} className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center text-sm font-medium text-[#0f1e45]">
              {role}
            </div>
          ))}
        </div>

        <div className="mx-auto mt-6 h-8 w-[58%] border-x border-t border-slate-300" />
        <div className="grid grid-cols-3 gap-4 px-16">
          {['Customer Care', 'Industry Coordinators & Supervisors', 'Transport Officer'].map((role) => (
            <div key={role} className="rounded-2xl border border-slate-200 bg-white p-3 text-center text-sm font-medium text-[#0f1e45]">
              {role}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OrgChart
