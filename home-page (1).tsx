import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { BookOpen, GraduationCap, Users, Calendar, Clock, Search, FileText, Image as ImageIcon, Video } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function Component() {
  const [activeSection, setActiveSection] = useState("home")
  const [isMessageSent, setIsMessageSent] = useState(false)

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Simulate sending a message
    setIsMessageSent(true)
    // Reset the form
    e.currentTarget.reset()
    // Clear the message after 3 seconds
    setTimeout(() => setIsMessageSent(false), 3000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <div className="relative w-[100px] h-[100px] mr-4">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file-sqWaov9m7ocbgkNo6oieheMggCTcN7.png"
                alt="Sree Sai Baba U.P. (E.M) School Logo"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold">SREE SAI BABA U.P [E.M] SCHOOL</h1>
              <p className="text-sm mt-1">Recognised by the Govt. of A.P.</p>
              <p className="text-sm mt-1">Principal: K.N.V SATYANARAYANA</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Button variant="ghost" className="hover:bg-transparent focus:ring-0" onClick={() => setActiveSection("home")}>Home</Button>
            <Button variant="ghost" className="hover:bg-transparent focus:ring-0" onClick={() => setActiveSection("about")}>About</Button>
            <Button variant="ghost" className="hover:bg-transparent focus:ring-0" onClick={() => setActiveSection("academics")}>Academics</Button>
            <Button variant="ghost" className="hover:bg-transparent focus:ring-0" onClick={() => setActiveSection("gallery")}>Gallery</Button>
            <Button variant="ghost" className="hover:bg-transparent focus:ring-0" onClick={() => setActiveSection("contact")}>Contact</Button>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {activeSection === "home" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Welcome to Sree Sai Baba U.P [E.M] School</h2>
            <p className="text-lg">Nurturing young minds from Nursery to 7th class. Our commitment to excellence in education extends beyond regular hours with comprehensive evening tuitions.</p>
          </section>
        )}

        {activeSection === "about" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">About Our School</h2>
            <p className="text-lg mb-4">Sree Sai Baba U.P [E.M] School is a premier educational institution recognized by the Government of Andhra Pradesh. We are committed to providing quality education and holistic development for students from Nursery to 7th class.</p>
            <p className="text-lg mb-4">Our school was established with the vision of nurturing young minds and preparing them for the challenges of the future. We believe in a balanced approach to education, combining academic excellence with character development and extra-curricular activities.</p>
            <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
            <p className="text-lg mb-4">To provide a stimulating learning environment that encourages students to realize their full potential and become responsible global citizens.</p>
            <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
            <ul className="list-disc list-inside text-lg">
              <li>Excellence in Education</li>
              <li>Integrity and Ethics</li>
              <li>Respect for Diversity</li>
              <li>Community Service</li>
              <li>Continuous Improvement</li>
            </ul>
          </section>
        )}

        {activeSection === "academics" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Academics</h2>
            <p className="text-lg mb-4">Our academic program is designed to provide a strong foundation for lifelong learning. We offer:</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <BookOpen className="mr-2" />
                  Our Programs
                </h3>
                <ul className="list-disc list-inside">
                  <li>Nursery Education</li>
                  <li>Primary Education (1st to 5th class)</li>
                  <li>Upper Primary Education (6th to 7th class)</li>
                  <li>Daily Evening Tuitions</li>
                  <li>Extra-curricular Activities</li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Clock className="mr-2" />
                  School Timings
                </h3>
                <div className="space-y-2">
                  <p><strong>Regular Classes:</strong> Monday to Saturday: 8:00 AM - 4:00 PM</p>
                  <p><strong>Evening Tuitions:</strong> Monday to Saturday: 6:30 PM - 9:30 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold mb-4">Curriculum Highlights</h3>
              <ul className="list-disc list-inside text-lg">
                <li>Comprehensive coverage of state board syllabus</li>
                <li>Focus on practical learning and experiments</li>
                <li>Regular assessments and feedback</li>
                <li>Special emphasis on language skills (Telugu and English)</li>
                <li>Computer education from primary classes</li>
                <li>Value education and moral science</li>
              </ul>
            </div>
          </section>
        )}

        {activeSection === "gallery" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[1, 2, 3, 4, 5].map((index) => (
                <div key={index} className="relative aspect-video">
                  <Image
                    src={`/placeholder.svg?height=200&width=300&text=Image ${index}`}
                    alt={`School image ${index}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              ))}
              <div className="relative aspect-video">
                <video controls className="w-full h-full rounded-lg">
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
            <Button className="mt-4 hover:bg-primary focus:ring-0">View Full Gallery</Button>
          </section>
        )}

        {activeSection === "contact" && (
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
                <p className="mb-2"><strong>Address:</strong> SREE SAI BABA U.P [E.M] SCHOOL, BHUJABALAPATNAM, Kaikalur, Eluru, 521340</p>
                <p className="mb-2"><strong>Phone:</strong> 9866438558</p>
                <p className="mb-2"><strong>Email:</strong> info@sreesaibaba.edu</p>
                <h4 className="text-xl font-semibold mt-4 mb-2">Office Hours</h4>
                <p>Monday to Saturday: 8:00 AM - 5:00 PM</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Send us a Message</h3>
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <Input type="text" placeholder="Your Name" required />
                  <Input type="email" placeholder="Your Email" required />
                  <Input type="tel" placeholder="Your Phone" required />
                  <textarea className="w-full p-2 border rounded-md" rows={4} placeholder="Your Message" required></textarea>
                  <Button type="submit" className="hover:bg-primary focus:ring-0">Send Message</Button>
                </form>
                {isMessageSent && (
                  <p className="mt-4 text-green-600">Message sent successfully!</p>
                )}
              </div>
            </div>
          </section>
        )}

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4 flex items-center">
            <Calendar className="mr-2" />
            Upcoming Events
          </h3>
          <ul className="space-y-2">
            <li>Parent-Teacher Meeting - Next Friday</li>
            <li>Annual Day Celebration - December 15</li>
            <li>Science Fair - January 10</li>
          </ul>
        </section>

        <section className="mt-12">
          <h3 className="text-2xl font-semibold mb-4">Stay Connected</h3>
          <div className="flex space-x-4">
            <Input type="email" placeholder="Enter your email" className="max-w-xs" />
            <Button className="hover:bg-primary focus:ring-0">Subscribe</Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 SREE SAI BABA U.P [E.M] SCHOOL. All rights reserved.</p>
          <p className="mt-2">Principal: K.N.V SATYANARAYANA</p>
          <p className="mt-1">SREE SAI BABA U.P [E.M] SCHOOL, BHUJABALAPATNAM, Kaikalur, Eluru, 521340</p>
          <p className="mt-1">Phone: 9866438558 | Email: info@sreesaibaba.edu</p>
        </div>
      </footer>
    </div>
  )
}