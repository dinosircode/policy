import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
      PITBP: Documentation, Policies, and Information
      </h1>
      <p className="mb-4">
        {`At Plus IT Park Thrissur, we prioritize transparency and effective communication by providing comprehensive documentation and policies for our stakeholders. This page serves as a centralized hub for all essential information, including our operational guidelines, safety protocols, and compliance measures. We believe that clear policies are vital for fostering a collaborative and productive environment. Here, you will find detailed resources that outline our expectations, procedures, and the support available to both employees and partners. We encourage you to explore these documents to gain a deeper understanding of our commitment to excellence and integrity in all our endeavors. Your adherence to these policies is crucial in maintaining a thriving community within Plus IT Park.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
