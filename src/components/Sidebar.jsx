import { useState, useEffect, useRef } from 'react'

export default function Sidebar() {
  const [activeId, setActiveId] = useState('')
  const [activeTitle, setActiveTitle] = useState('')
  
  // Keep track of which elements are currently visible
  const visibleSections = useRef(new Set());

  const menuItems = [
    {
      title: "Introduction",
      items: ["What do we mean by \"Accessible\"", "What is this page about?", "Who made this?"]
    },
    // {
    //   title: "Examples By Disability",
    //   items: ["Vision", "Auditory", "Motor"]
    // },
    // {
    //   title: "Examples By Compliance Level",
    //   items: ["Level A", "Level AA", "Level AAA"]
    // },
    // {
    //   title: "Examples By Principle",
    //   items: ["Perceivable", "Operable", "Understandable", "Robust"]
    // }
  ];

  // Helper to normalize strings to IDs
  const toId = (str) => str.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase();

  useEffect(() => {
    const observerOptions = {
      root: null,
      // Define a "reading zone" offset by the header height (approx 98px)
      // This ensures the active state triggers exactly when the section clears the sticky header.
      rootMargin: '-98px 0px -50% 0px', 
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleSections.current.add(entry.target.id);
        } else {
          visibleSections.current.delete(entry.target.id);
        }
      });

      // Find the first visible section based on the order in menuItems
      let foundActive = false;
      
      for (const section of menuItems) {
        for (const item of section.items) {
          const id = toId(item);
          if (visibleSections.current.has(id)) {
            setActiveId(id);
            setActiveTitle(section.title);
            foundActive = true;
            break; 
          }
        }
        if (foundActive) break;
      }

      // If no sections are intersecting (e.g. in a gap), 
      // we purposefully DO NOT update activeId/activeTitle to keep the last one active.
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const contentBlocks = document.querySelectorAll('.content-block');
    contentBlocks.forEach((block) => observer.observe(block));

    return () => observer.disconnect();
  }, []);

  return (
    <aside className="sidebar">
      <nav>
        {menuItems.map((section, index) => (
          <div key={index} className="sidebar-section">
            <h3 className={`sidebar-title ${activeTitle === section.title ? 'active' : ''}`}>
              {section.title}
            </h3>
            <ul className="sidebar-list">
              {section.items.map((item, itemIndex) => {
                const id = toId(item);
                const isActive = activeId === id;
                return (
                  <li key={itemIndex} className="sidebar-item">
                    <a 
                      href={`#${id}`}
                      className={isActive ? 'active' : ''}
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  )
}
