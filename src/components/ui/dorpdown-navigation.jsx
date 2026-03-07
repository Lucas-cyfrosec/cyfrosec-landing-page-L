import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function DropdownNavigation({ navItems, onNavigate }) {
  const [openMenu, setOpenMenu] = React.useState(null);
  const [isHover, setIsHover] = React.useState(null);

  const handleHover = (menuLabel) => {
    setOpenMenu(menuLabel);
  };

  return (
    <ul className="relative flex items-center space-x-0">
      {navItems.map((navItem) => (
        <li
          key={navItem.label}
          className="relative"
          onMouseEnter={() => handleHover(navItem.label)}
          onMouseLeave={() => handleHover(null)}
        >
          <a
            href={navItem.link ?? '#'}
            className="cy-navbar-link text-[13px] py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 cy-text-secondary hover:cy-text-primary relative rounded-full"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
            onClick={(event) => onNavigate?.(navItem.link ?? '#', navItem.isNav, event)}
            aria-expanded={openMenu === navItem.label}
            aria-haspopup={Boolean(navItem.subMenus)}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`h-3.5 w-3.5 group-hover:rotate-180 duration-300 transition-transform ${
                  openMenu === navItem.label ? 'rotate-180' : ''
                }`}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg"
                className="cy-navbar-hover-bg absolute inset-0 size-full bg-[color-mix(in_srgb,var(--text-primary)_6%,transparent)]"
                style={{ borderRadius: 99 }}
              />
            )}
          </a>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="w-auto absolute left-0 top-full pt-2 z-50">
                <motion.div
                  className="cy-navbar-dropdown cy-bg-elevated border cy-border p-4 w-max shadow-2xl"
                  style={{ borderRadius: 16 }}
                  layoutId="menu"
                >
                  <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="cy-navbar-dropdown-label mb-4 text-[10px] font-bold uppercase tracking-[0.18em] cy-text-muted">
                          {sub.title}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href={item.href ?? '#'}
                                  className="cy-navbar-dropdown-item flex items-start space-x-3 group rounded-xl p-2 -mx-2 -my-1 transition-colors duration-300"
                                  onClick={(event) => onNavigate?.(item.href ?? '#', item.isNav, event)}
                                >
                                  <div className="cy-navbar-dropdown-icon border cy-border cy-text-primary rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-[color-mix(in_srgb,var(--text-primary)_4%,transparent)] transition-colors duration-300">
                                    <Icon className="h-5 w-5 flex-none" />
                                  </div>
                                  <div className="leading-5 w-max">
                                    <p className="cy-navbar-dropdown-title text-[13px] font-semibold cy-text-primary shrink-0">
                                      {item.label}
                                    </p>
                                    <p className="cy-navbar-dropdown-desc text-xs cy-text-muted shrink-0 group-hover:cy-text-secondary transition-colors duration-300">
                                      {item.description}
                                    </p>
                                  </div>
                                </a>
                              </li>
                            );
                          })}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
