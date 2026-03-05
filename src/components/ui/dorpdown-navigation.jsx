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
            className="text-sm py-2 px-4 flex cursor-pointer group transition-colors duration-300 items-center justify-center gap-1 cy-text-sidebar hover:cy-text-sidebar-strong relative rounded-full"
            onMouseEnter={() => setIsHover(navItem.id)}
            onMouseLeave={() => setIsHover(null)}
            onClick={(event) => onNavigate?.(navItem.link ?? '#', navItem.isNav, event)}
            aria-expanded={openMenu === navItem.label}
            aria-haspopup={Boolean(navItem.subMenus)}
          >
            <span>{navItem.label}</span>
            {navItem.subMenus && (
              <ChevronDown
                className={`h-4 w-4 group-hover:rotate-180 duration-300 transition-transform ${
                  openMenu === navItem.label ? 'rotate-180' : ''
                }`}
              />
            )}
            {(isHover === navItem.id || openMenu === navItem.label) && (
              <motion.div
                layoutId="hover-bg"
                className="absolute inset-0 size-full bg-[var(--bg-sidebar-hover)]"
                style={{ borderRadius: 99 }}
              />
            )}
          </a>

          <AnimatePresence>
            {openMenu === navItem.label && navItem.subMenus && (
              <div className="w-auto absolute left-0 top-full pt-2 z-50">
                <motion.div
                  className="cy-bg-sidebar border cy-border-sidebar p-4 w-max shadow-xl"
                  style={{ borderRadius: 16 }}
                  layoutId="menu"
                >
                  <div className="w-fit shrink-0 flex space-x-9 overflow-hidden">
                    {navItem.subMenus.map((sub) => (
                      <motion.div layout className="w-full" key={sub.title}>
                        <h3 className="mb-4 text-sm font-medium capitalize cy-text-sidebar-muted">
                          {sub.title}
                        </h3>
                        <ul className="space-y-4">
                          {sub.items.map((item) => {
                            const Icon = item.icon;
                            return (
                              <li key={item.label}>
                                <a
                                  href={item.href ?? '#'}
                                  className="flex items-start space-x-3 group"
                                  onClick={(event) => onNavigate?.(item.href ?? '#', item.isNav, event)}
                                >
                                  <div className="border cy-border-sidebar cy-text-sidebar-strong rounded-md flex items-center justify-center size-9 shrink-0 group-hover:bg-[var(--bg-sidebar-hover)] transition-colors duration-300">
                                    <Icon className="h-5 w-5 flex-none" />
                                  </div>
                                  <div className="leading-5 w-max">
                                    <p className="text-sm font-medium cy-text-sidebar-strong shrink-0">
                                      {item.label}
                                    </p>
                                    <p className="text-xs cy-text-sidebar-muted shrink-0 group-hover:cy-text-sidebar-strong transition-colors duration-300">
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
