export default function Introduction() {
  return (
    <section className="major-section">
      <h1 className="major-title">Introduction</h1>
      
      <div id="what-do-we-mean-by-accessible" className="content-block">
        <h2>What do we mean by "Accessible"</h2>
        <p>
          When we talk about accessibility in web development, we're referring to the practice of making websites usable by as many people as possible. This includes people with disabilities such as visual, auditory, motor, or cognitive impairments.
        </p>
        <p>
          Accessibility means ensuring that your content can be navigated via keyboard, understood by screen readers, and is legible for those with low vision. It's about removing barriers that prevent interaction with, or access to, websites by people with disabilities. When sites are correctly designed, developed and edited, generally all users have equal access to information and functionality.
        </p>
        <div style={{ margin: '20px 0', textAlign: 'center' }}>
          <img 
            src="https://placehold.co/800x400?text=Accessibility+Diagram" 
            alt="Placeholder diagram illustrating accessibility concepts" 
            style={{ maxWidth: '100%', borderRadius: '8px', border: '1px solid #ccc' }}
          />
          <p style={{ fontSize: '0.9rem', color: '#666', marginTop: '8px' }}>Figure 1: Conceptual model of web accessibility.</p>
        </div>
        <p>
          It is not just about "fixing" things for a minority group; accessible design often improves the overall user experience for everyone. For example, captions on videos help people in noisy environments, and good color contrast helps everyone read text on a screen in bright sunlight. Designing for accessibility drives innovation and improves the user experience for users with and without disabilities.
        </p>
      </div>

      <div id="what-is-this-page-about" className="content-block">
        <h2>What is this page about?</h2>
        <p>
          This page serves as a comprehensive guide and demonstration of Web Content Accessibility Guidelines (WCAG) in action. We aim to provide clear, practical examples of both compliant and non-compliant patterns to help developers and designers understand the nuances of accessibility.
        </p>
        <p>
          Throughout this site, you will find various sections dedicated to different aspects of accessibility. We break down complex guidelines into understandable concepts, showing you not just the "what" but the "why" and "how" of accessible implementation. From simple text contrast to complex interactive widgets, we explore a wide range of scenarios.
        </p>
        <p>
          Our goal is to bridge the gap between abstract guidelines and real-world application. By seeing code examples side-by-side with their rendered output and accessibility analysis, you can better grasp how your coding decisions impact users with different needs. We believe that practical demonstration is one of the most effective ways to learn.
        </p>
        <p>
          You'll find examples covering:
        </p>
        <ul style={{ paddingLeft: '20px', marginBottom: '16px' }}>
          <li>Perceivable content: Providing text alternatives, captions, and adaptable layouts.</li>
          <li>Operable interfaces: Ensuring keyboard functionality, enough time to read, and safe navigation.</li>
          <li>Understandable information: Making text readable, predictable, and offering input assistance.</li>
          <li>Robust content: Maximizing compatibility with current and future user agents.</li>
        </ul>
      </div>

      <div id="who-made-this" className="content-block">
        <h2>Who made this?</h2>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', margin: '20px 0', flexWrap: 'wrap' }}>
          <img 
            src="https://placehold.co/200x200?text=Team" 
            alt="The development team working together" 
            style={{ borderRadius: '50%', width: '150px', height: '150px', objectFit: 'cover' }}
          />
          <div style={{ flex: 1 }}>
            <p style={{ marginTop: 0 }}>
              This project is a collaborative effort by passionate web developers and accessibility advocates who believe that the web should be open to everyone. We recognized a need for a centralized resource that goes beyond documentation to provide hands-on examples.
            </p>
            <p>
              We are constantly learning and improving, just like the standards themselves. This resource is maintained by the community, for the community. If you spot an error or have a suggestion for a new example, we encourage you to contribute.
            </p>
          </div>
        </div>
        <p>
          Together, we can build a more inclusive digital landscape. Special thanks to the contributors who have dedicated their time to research, code, and document these examples. Your work helps make the internet a better place for millions of users worldwide.
        </p>
        <p>
           We also want to acknowledge the work of the W3C Web Accessibility Initiative (WAI) for their foundational standards and guidelines which make this work possible.
        </p>
      </div>
    </section>
  )
}
