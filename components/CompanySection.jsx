import Badge from "./Badge"

const CompanySection = () => {
    return (
        <div className="bg-primary dark:bg-tertiary py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                    {/* Badge 1 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Transaction every 24 hours
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={44}
                                endCountText='million'
                            />
                        </dd>
                    </div>

                    {/* Badge 2 */}
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            Assets Ubder Running
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={199}
                                endCountText='trillion'
                            />
                        </dd>
                    </div>

                      {/* Badge 3 */}
                      <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                        <dt className="text-white leading-7">
                            New Users Annually
                        </dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                            <Badge
                                endCountNum={199}
                                endCountText='+'
                            />
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    )
}

export default CompanySection
