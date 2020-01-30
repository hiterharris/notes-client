const initialState = {
    notes: [
        {
          id: 1,
          title: "Apple's Notes app is qui...",
          date: "April 6, 2016 at 9:58 AM",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      },
      {
          id: 2,
          title: "It hasn't been long sinc...",
          date: "April 6, 2016 at 10:52 AM",
          text: "It hasn't been long since the last RSC production of Hamlet. In 2013, the RSC featured Jonathan Slinger as Hamlet, in an introspective performance. Slightly older is the David Tennant Hamlet, available on DVD and Blu-Ray (Amazon.com, Amazon UK), with another psychological approach to the role. But this year's Hamlet takes a different tack. the 25 year-old actor Papa Essiedu portrays a Hamlet that is petulant and impulsive, one who wears his madness as a badge of pride.  But is his madness real or just feigned"
      },
    ],
    selectedNote: '',
    search: '',
}

export const reducer = (state= initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}