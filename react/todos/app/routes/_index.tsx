import type { Route } from "./+types/_index";
import AddTaskIcon from "../assets/icons/addTaskIcon";
import BarChartIcon from "~/assets/icons/barChartIcon";
import CloudIcon from "~/assets/icons/cloudIcon";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Write your todos | Home" },
    { name: "description", content: "Write your todos and manage them!" },
  ];
}

export default function Todo() {
  return (
    <>
      <main>
        <section className="py-20">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="">
              <h1 className="text-5xl font-bold text-primary">
                Stay Organized,
              </h1>
              <h1 className="text-5xl font-bold text-blue-500">
                Stay Productive
              </h1>
              <p className="text-secondary py-4">
                The minimalist todo list designed to help you focus on what matters. Clear your mind and get things done with zero clutter.
              </p>
              <div className="flex gap-2 pt-4">
                <Link to="/todo">
                <button className="cursor-pointer btn-primary">Get Started</button>
                </Link>
                <Link to="/todo">
                <button className="cursor-pointer btn-secondary">Learn More</button>
                </Link>
              </div>
            </div>
            <div className="pt-8 md:pl-20">
              <img src="https://picsum.photos/seed/todos/800/400" alt="Todo app placeholder" />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col justify-center items-center text-primary">
            <p className="text-blue-500">Everything you need</p>
            <h1 className="text-4xl font-bold">Key Feature</h1>
            <div className="pt-4">
            <p>Everything you need to manage your task efficiently without the clutter.
              <br></br>
              <p className="text-center">Designed for focus.</p>
            </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-15 text-secondary">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 rounded-xl p-2 size-fit">
              <AddTaskIcon />
              </div>
              <h4 className="text-lg font-bold pt-2">Simple Task Entry</h4>
              <p className="pt-2">Capture ideas in seconds with our lightning-fast input. No complex forms, just type and go.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 rounded-xl p-2 size-fit">
              <BarChartIcon/>
              </div>
              <h4 className="text-lg font-bold pt-2">Progress Tracking</h4>
              <p className="pt-2">Visualize your productivity and celebrate your daily wins. See how far you've come every week.</p>
            </div>
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl hover:-translate-y-2 transition-all">
              <div className="bg-blue-100 rounded-xl p-2 size-fit">
              <CloudIcon/>
              </div>
              <h4 className="text-lg font-bold pt-2">Cloud Sync</h4>
              <p className="pt-2">Access your lists seamlessly across all your devices. Your tasks are always with you, everywhere.</p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="flex flex-col justify-center items-center text-primary">
            <h1 className="text-4xl font-bold">Ready to boost your productivity?</h1>
            <div className="py-2">
            <p className="text-center">Join thousands of users who have streamlined their workflow.</p>
            <p className="text-center">Start your free trial today.</p>
            </div>
            <div className="py-4">
            <Link to="/todo">
            <button className="cursor-pointer btn-primary py-4">Start for free</button>
            </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
