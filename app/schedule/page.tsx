import React from "react";
import { Calendar, Clock, GlobeIcon } from "lucide-react";

export default function SchedulePage() {
  return (
    <div className="min-h-screen mt-10 bg-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-16">Event Schedule</h1>

        {/* Registration Timeline */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <Calendar className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Registration Timeline</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">
                  19th Chaitra
                </div>
                <div>
                  <div className="font-semibold">Registration Opens</div>
                  <p className="text-gray-600">Registration period begins.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">
                  1st Jestha
                </div>
                <div>
                  <div className="font-semibold">Registration Closes</div>
                  <p className="text-gray-600">
                    Last day to register for the BMC InnovateX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Online Round */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center mb-8">
            <GlobeIcon className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Online Schedule</h2>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">TBA</div>
                <div>
                  <div className="font-semibold">Online Round</div>
                  <p className="text-gray-600">Selection of best 15 Teams.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 w-32 font-semibold">TBA</div>
                <div>
                  <div className="font-semibold">Reveled On-site Finalist</div>
                  <p className="text-gray-600">
                    The best 15 Teams will be invited for On-site round of BMC
                    InnovateX
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Event Schedule */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-8">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h2 className="text-2xl font-semibold">Main Event Schedule</h2>
          </div>

          {/* Day 1 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 0 - 24<sup>th</sup> Jestha
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">6:00 PM</div>
                <div>
                  <div className="font-semibold">
                    Check-in for innovaters from outside of Rupandehi{" "}
                  </div>
                  <p className="text-gray-600">
                    Participants outside Butwal(or Rupandehi district) can check
                    in at the venue one day prior to the event day.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Day 1 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 1 - 25<sup>th</sup> Jestha
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 h-[20rem] p-4 rounded-lg">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <div className="font-semibold">
                    First Day of BMC InnovateX
                  </div>
                  <p className="text-gray-600">
                    Detailed time schedule will be updated soon.
                  </p>
                </div>
              </div>
              {/* <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">9:30 AM</div>
                <div>
                  <div className="font-semibold">Opening Ceremony</div>
                  <p className="text-gray-600">
                    Welcome address, rules briefing, and keynote speech
                  </p>
                </div>
              </div> */}
              {/* <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">10:00 AM</div>
                <div>
                  <div className="font-semibold">Hacking Begins</div>
                  <p className="text-gray-600">
                    Start working on your projects
                  </p>
                </div>
              </div> */}
            </div>
          </div>

          {/* Day 2 */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 2 - 26<sup>th</sup> Jestha
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 h-[20rem] p-4 rounded-lg">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <div className="font-semibold">
                    Second Day of BMC InnovateX
                  </div>
                  <p className="text-gray-600">
                    Detailed time schedule will be updated soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 3 - 27<sup>th</sup> Jestha
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 h-[20rem] p-4 rounded-lg">
                <div className="flex h-full w-full flex-col items-center justify-center">
                  <div className="font-semibold">
                    Final Day of BMC InnovateX
                  </div>
                  <p className="text-gray-600">
                    Detailed time schedule will be updated soon.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Day 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-6 bg-indigo-50 p-4 rounded-lg">
              Day 4 - 28<sup>th</sup> Jestha
            </h3>
            <div className="space-y-6">
              <div className="flex items-start bg-gray-50 p-4 rounded-lg">
                <div className="flex-shrink-0 w-32 font-semibold">7:00 AM</div>
                <div>
                  <div className="font-semibold">
                    Check Out for participants outside Rupandehi
                  </div>
                  <p className="text-gray-600">
                    Check out for participants outside Butwal(or Rupandehi
                    district)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
