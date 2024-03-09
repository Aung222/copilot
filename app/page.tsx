import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <header className=" p-4">
        {/* First Nav */}
        <div className=" flex justify-between items-center ">
          <div className=" flex items-center">
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path></svg>
            </a>
            <ul className="flex gap-2 px-2">
              <li className="p-2">Product</li>
              <li className="p-2">Solutions</li>
              <li className="p-2">Open Source</li>
              <li className="p-2">Pricing</li>
            </ul>
          </div>
          <div className="flex items-center">
            <div className="border flex justify-between items-center border-white bg-gray-500 rounded-lg p-0.5 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="rgba(255,255,255,1)"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
              <p className=" ml-1 mr-24">Search or jump to...</p>

              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="mr-1"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>
            </div>
            <div className="flex items-center gap-3 px-3">
              <a href="#" className=" hover:text-gray-500">Sign in</a>
              <a href="#" className=" border border-white p-2 rounded-md hover:text-gray-500 hover:border-gray-500">Sign up</a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="border-y border-y-white">
          <ul className="px-4 py-5 flex gap-4 items-center">
            <li className="hover:text-blue-800 font-bold">Features</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Actions</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Packages</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Security</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Codespaces</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Copilot</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Code review</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Search</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Issues</li>
            <li className="hover:text-blue-800 hover:underline hover:underline-offset-4">Discussions</li>
          </ul>
        </div>
        <div className="mx-28">
          <div className="py-24 text-center">
            <div className="mx-auto">
              <p className="py-1 px-3 w-fit mx-auto border border-white rounded-full text-sm">Github Copilot</p>
              <p className="py-8 text-6xl font-black">The world’s most widely <br />adopted AI developer tool.</p>
              <p className=" bg-white px-4 py-4 mx-auto w-1/5 rounded-lg text-black font-semibold">Get Started with Copilot</p> 
            </div>
          </div>
        </div>

        <div className=" bg-gray-500">
          <div className="py-24">
            <div className="mx-28">
              <div className=" px-4 pb-28">
                <p className="py-1 px-3 w-fit border border-white rounded-full text-sm">Enterprise Ready</p>
                <p className="py-8 text-6xl font-black">The competitive advantage <br />developers ask for by name.</p>
              </div>
              {/* Card */}
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-7">
                  <div className=" bg-blue-600 rounded-lg">
                    <div className="p-14">
                      <div className="flex flex-col">
                        <p className=" text-5xl font-semibold">Proven to increase developer productivity and accelerate the pace of software development.</p>
                        <a href="#" className="hover:underline mt-32">Read this research</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-5">
                  <div className=" bg-blue-900 rounded-lg">
                    <div className="p-14">
                      <div className="flex flex-col justify-between">

                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5">
                  <div className="p-14">
                    <div className="flex flex-col justify-between">
                      
                    </div>
                  </div>
                </div>
                <div className="col-span-7">
                  <div className="p-14">
                    <div className="flex flex-col justify-between">
                      <p>Proven to increase developer productivity and accelerate the pace of software development.</p>
                      <a href="#" className="hover:underline">Read this research</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className=" bg-gray-700">
          <div className="pt-28 pb-40">
            <div className=" mx-32">
              <p className="pb-16 text-5xl font-bold">The industry standard.</p>
              <div className="grid grid-cols-3 gap-8">
                <div className="border border-white rounded-lg">
                  <div className="p-14 h-80">
                    <p className="text-5xl font-semibold mb-4">37,000+</p>
                    <p className=" text-gray-500 text-2xl">Businesses have adopted GitHub Copilot</p>
                  </div>
                </div>
                <div className="border border-white rounded-lg">
                  <div className="p-14 h-80 flex flex-col justify-between">
                    <p className="text-5xl font-semibold">1 in 3</p>
                    <p className=" text-gray-500 text-2xl">Fortune 500 companies use GitHub Copilot</p>
                    <p className=" text-gray-500">Available for business since Dec 2022</p>
                  </div>
                </div>
                <div className="border border-white rounded-lg">
                  <div className="p-14 h-80 flex flex-col justify-between">
                    <p className="text-5xl font-semibold">55%</p>
                    <p className=" text-gray-500 text-2xl">Developer preference for GitHub Copilot</p>
                    <p className=" text-gray-500">Stack Overflow 2023 Survey</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="">
          <div className="pt-28 pb-40">
            <div className=" mx-32">
              <p className="py-1 px-3 w-fit border border-white rounded-full text-sm">Features</p>
              <p className="pt-4 pb-16 text-7xl font-bold">The AI coding assistant <br />elevating developer workflows.</p>
              <div className="my-16">
                <video src="https://github.com/images/modules/site/copilot/features-breakout.mp4" className="rounded-xl"></video>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="col-span-2">
                  <p className="text-3xl font-medium">Start a conversation about your codebase. <br /><span className="text-gray-500">Whether you’re hunting down a bug or designing <br />a new feature—when you’re stuck, ask<br />GitHub Copilot.</span></p>
                </div>
                <div className="">
                  <p className="pb-8 text-start font-bold">Improve code quality and security. <span className="text-gray-500 font-normal">Developers feel <a href="#" className="underline hover:text-white">more confident in their code quality</a> when authoring code with Copilot. And with the built-in <a href="#" className="underline hover:text-white">vulnerability prevention system</a>, insecure coding patterns get blocked in real time.</span></p>
                  <p className="pb-8 text-start font-bold">Enable greater collaboration. <span className="text-gray-500 font-normal">Copilot’s the newest member of your team. You can ask general programming questions or very specific ones about your codebase to get answers fast, learn your way around, explain a mysterious regex, or get suggestions on how to improve legacy code.</span></p>
                </div>
              </div>
              <div className="grid grid-cols-12 gap-16 mt-16">
                <div className="col-span-5 my-auto">
                  <p className="pb-4 text-4xl font-bold">Get AI-based <br />suggestions in real time.</p>
                  <p className="text-gray-500">GitHub Copilot suggests code completions as <br />developers type and turns natural language prompts <br />into coding suggestions based on the project's context <br />and style conventions.</p>
                </div>
                <div className="col-span-7"><video src="https://github.com/images/modules/site/copilot/features-river-1.mp4" className="rounded-xl"></video></div>
                <div className="col-span-5 my-auto">
                  <p className="py-1 px-3 w-fit border border-white rounded-full text-sm">Copilot Enterprise</p>
                  <p className="py-4 text-4xl font-bold">Docs that feel tailored for you.</p>
                  <p className="text-gray-500">Spend less time searching and more time learning, by <br />getting personalized answers that are grounded in your <br />organization’s documentation, with inline citations. <br />Load content → Ask question → Profit.</p>
                </div>
                <div className="col-span-7"><video src="https://github.com/images/modules/site/copilot/features-river-2.mp4" className="rounded-xl"></video></div>
                <div className="col-span-5 my-auto">
                  <p className="py-1 px-3 w-fit border border-white rounded-full text-sm">Copilot Enterprise</p>
                  <p className="py-4 text-4xl font-bold">Pull requests that tell a story.</p>
                  <p className="text-gray-500">GitHub Copilot keeps track of your work, suggests <br />descriptions, and helps reviewers reason about your <br />changes.</p>
                </div>
                <div className="col-span-7"><video src="https://github.com/images/modules/site/copilot/features-river-3.mp4" className="rounded-xl"></video></div>
              </div>

            </div>
          </div>
        </div>

        <div className="pt-28 pb-40">
          <div className="mx-32">
            <p className="py-1 px-3 w-fit border border-white rounded-full text-sm">Copilot Enterprise</p>
            <p className="py-4 text-4xl font-bold">Take flight with GitHub Copilot.</p>
            <p className="text-gray-500">Organizations and developers all over the world use GitHub Copilot to code faster, drive <br />impact, and focus on doing what matters most: building great software.</p>
            <div className="py-28">
              <p className="pb-16 text-2xl font-bold">For organizations</p>
              <div className="bg-gray-700 border rounded-xl px-16 py-12">
                <div className="grid grid-cols-2">
                  <div className="pe-20 border border-r border-l-0 border-y-0 ">
                    <div className="pb-8 border border-b border-x-0 border-t-0">
                      <p className="text-xs text-purple-500">Recommended</p>
                      <p className=" mt-2 mb-4 text-lg font-semibold">Copilot Business</p>
                      <p className="text-gray-500 h-20">Copilot in the coding environment.</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">$</span>
                        <span className="text-5xl">19</span>
                        <span className="text-gray-500 text-sm">per user / month</span>
                      </div>
                    </div>
                  </div>
                  <div className="ps-20">
                    <div className="pb-8 border border-b border-x-0 border-t-0">
                      <p className="text-xs text-purple-500">Available Feb 2024</p>
                      <p className=" mt-2 mb-4 text-lg font-semibold">Copilot Enterprise</p>
                      <p className="text-gray-500 h-20">Copilot personalized to your organization throughout the software development lifecycle. Requires GitHub Enterprise Cloud.</p>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">$</span>
                        <span className="text-5xl">39</span>
                        <span className="text-gray-500 text-sm">per user / month</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}