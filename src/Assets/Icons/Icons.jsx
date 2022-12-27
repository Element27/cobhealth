import React from 'react'

export function MenuIcon(props) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}


export function CloseIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        d="M6.225 4.811a1 1 0 00-1.414 1.414L10.586 12 4.81 17.775a1 1 0 101.414 1.414L12 13.414l5.775 5.775a1 1 0 001.414-1.414L13.414 12l5.775-5.775a1 1 0 00-1.414-1.414L12 10.586 6.225 4.81z"
      />
    </svg>
  );
}

export function ScheduleIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 14a1 1 0 10-1-1 1 1 0 001 1zm5 0a1 1 0 10-1-1 1 1 0 001 1zm-5 4a1 1 0 10-1-1 1 1 0 001 1zm5 0a1 1 0 10-1-1 1 1 0 001 1zM7 14a1 1 0 10-1-1 1 1 0 001 1zM19 4h-1V3a1 1 0 00-2 0v1H8V3a1 1 0 00-2 0v1H5a3 3 0 00-3 3v12a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 15a1 1 0 01-1 1H5a1 1 0 01-1-1v-9h16zm0-11H4V7a1 1 0 011-1h14a1 1 0 011 1zM7 18a1 1 0 10-1-1 1 1 0 001 1z" />
    </svg>
  );
}


export function HeartbeatIcon(props) {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      height="1em"
      width="1em"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M3 12h4.5L9 6l4 12 2-9 1.5 3H21" />
    </svg>
  );
}

export function CommunityIcon(props) {
  return (
    <svg fill="none" viewBox="0 0 24 24" height="1em" width="1em" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 17.456a6 6 0 110-10.912 6 6 0 110 10.912zm-2-1.487a4 4 0 110-7.938A5.977 5.977 0 008.5 12c0 1.522.567 2.911 1.5 3.969zm4-7.938a4 4 0 110 7.938A5.978 5.978 0 0015.5 12 5.978 5.978 0 0014 8.031zm-2 .846c.915.733 1.5 1.86 1.5 3.123 0 1.263-.585 2.39-1.5 3.123A3.993 3.993 0 0110.5 12c0-1.263.585-2.39 1.5-3.123z"
        clipRule="evenodd"
      />
    </svg>
  );
}