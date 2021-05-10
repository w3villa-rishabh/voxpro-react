export default [
  {
    index: 1,
    heading: 'About you and the work',
    question:
      'Do you provide your services through a limited company, partnership or unincorporated association?',
    p1: 'These are also known as intermediarie',
    p2:
      'An unincorporated association’ is an organisation set up by a group of people for a reason other than to make a profit. For example, a voluntary group or a sports club.',
    provious: 0,
    status: true,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 3
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 2
      }
    ]
  },
  {
    index: 2,
    heading: 'edhar restart krne ka code likhna',
    options: []
  },
  {
    index: 3,
    heading: 'About you and the work',
    question: 'Have you already started working for this client?',
    p1: '',
    p2: '',
    provious: 1,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 4
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 5
      }
    ]
  },
  {
    index: 4,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder’?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    provious: 3,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 7
      }
    ]
  },
  {
    index: 5,
    heading: 'Worker’s duties',
    question: 'Will you be an ‘Office Holder’?',
    p1:
      'This can include being a board member, treasurer, trustee, company secretary or company director.',
    p2: 'Read more about Office Holders (opens in a new window).',
    provious: 3,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 6
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 8
      }
    ]
  },
  {
    index: 6,
    message: 'your answer has been submitted',
    options: []
  },
  {
    index: 7,
    heading: 'Substitutes and helpers',
    question: 'Have you ever sent a substitute to do this work?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2: '',
    provious: 4,
    status: false,
    options: [
      {
        name: 'Yes, your client accepted them',
        value: 'a',
        aria_label: 'A',
        next: 9
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'b',
        aria_label: 'B',
        next: 10
      },
      {
        name: 'Yes, but your client did not accept them',
        value: 'c',
        aria_label: 'C',
        next: 11
      }
    ]
  },
  {
    index: 8,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures',
    provious: 5,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 12
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 13
      }
    ]
  },
  {
    index: 9,
    heading: 'Substitutes and helpers',
    question: 'Did you pay your substitute?',
    p1: 'This includes payments made by you or your business.',
    p2: '',
    provious: 7,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 14
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 15
      }
    ]
  },
  {
    index: 10,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    provious: 7,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 16
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 16
      }
    ]
  },
  {
    index: 11,
    heading: 'Substitutes and helpers',
    question: 'Does your client have the right to reject a substitute?',
    p1: 'A substitute is someone you send in your place to do your role.',
    p2:
      'This can include rejecting a substitute even if they are equally qualified, and meet your client’s interviewing, vetting and security clearance procedures.',
    provious: 7,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 17
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 18
      }
    ]
  },
  {
    index: 12,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 8,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 19
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 19
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 19
      }
    ]
  },
  {
    index: 13,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    provious: 8,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 20
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 20
      }
    ]
  },
  {
    index: 14,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 9,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 21
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 21
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 21
      }
    ]
  },
  {
    index: 15,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    provious: 9,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 22
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 22
      }
    ]
  },
  {
    index: 16,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 10,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 23
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 23
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 23
      }
    ]
  },
  {
    index: 17,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    provious: 11,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 24
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 24
      }
    ]
  },
  {
    index: 18,
    heading: 'Substitutes and helpers',
    question: 'Would you have to pay your substitute?',
    p1: 'This would include payments made by you or your business.',
    p2: '',
    provious: 11,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 25
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 26
      }
    ]
  },
  {
    index: 19,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 12,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 27
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 27
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 27
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 27
      }
    ]
  },
  {
    index: 20,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 13,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 28
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 28
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 28
      }
    ]
  },
  {
    index: 21,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 14,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 29
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 29
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 29
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 29
      }
    ]
  },
  {
    index: 22,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 15,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 30
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 30
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 30
      }
    ]
  },
  {
    index: 23,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 16,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 31
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 31
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 31
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 31
      }
    ]
  },
  {
    index: 24,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 17,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 32
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 32
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 32
      }
    ]
  },
  {
    index: 25,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 18,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 33
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 33
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 33
      }
    ]
  },
  {
    index: 26,
    heading: 'Substitutes and helpers',
    question:
      'Have you paid another person to do a significant amount of this work?',
    p1: '',
    p2: '',
    provious: 18,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 34
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 34
      }
    ]
  },
  {
    index: 27,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 19,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 35
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 35
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 35
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 35
      }
    ]
  },
  {
    index: 28,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 20,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 36
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 36
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 36
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 36
      }
    ]
  },
  {
    index: 29,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 21,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 37
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 37
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 37
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 37
      }
    ]
  },
  {
    index: 30,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 22,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 38
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 38
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 38
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 38
      }
    ]
  },
  {
    index: 31,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 23,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 39
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 39
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 39
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 39
      }
    ]
  },
  {
    index: 32,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 24,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 40
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 40
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 40
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 40
      }
    ]
  },
  {
    index: 33,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 25,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 41
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 41
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 41
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 41
      }
    ]
  },
  {
    index: 34,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to move you from the task you originally agreed to do?',
    p1:
      'A worker taken on for general tasks, rather than one specific task, might be moved as and when priorities change. The client may not need the worker’s permission to move them.',
    p2: '',
    provious: 26,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 42
      },
      {
        name: 'No, you would have to agree',
        value: 'b',
        aria_label: 'B',
        next: 42
      },
      {
        name:
          'No, that would require a new contract or formal working arrangement',
        value: 'c',
        aria_label: 'C',
        next: 42
      }
    ]
  },
  {
    index: 35,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 27,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 43
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 43
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 43
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 43
      }
    ]
  },
  {
    index: 36,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 28,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 44
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 44
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 44
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 44
      }
    ]
  },
  {
    index: 37,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 29,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 45
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 45
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 45
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 45
      }
    ]
  },
  {
    index: 38,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 30,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 46
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 46
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 46
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 46
      }
    ]
  },
  {
    index: 39,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 31,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 47
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 47
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 47
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 47
      }
    ]
  },
  {
    index: 40,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 32,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 48
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 48
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 48
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 48
      }
    ]
  },
  {
    index: 41,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 33,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 49
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 49
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 49
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 49
      }
    ]
  },
  {
    index: 42,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide how the work is done?',
    p1:
      'This can include your client instructing, guiding or advising the way the task should be completed.',
    p2:
      'This is not relevant if it is highly skilled work. For example, an airline pilot.',
    provious: 34,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 50
      },
      {
        name: 'No, you solely decideo',
        value: 'b',
        aria_label: 'B',
        next: 50
      },
      {
        name: 'No, you and your client agree together',
        value: 'c',
        aria_label: 'C',
        next: 50
      },
      {
        name: 'Not relevant, it is highly skilled work',
        value: 'd',
        aria_label: 'D',
        next: 50
      }
    ]
  },
  {
    index: 43,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 35,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 51
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 51
      }
    ]
  },
  {
    index: 44,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 36,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 52
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 52
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 52
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 52
      }
    ]
  },
  {
    index: 45,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 37,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 53
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 53
      }
    ]
  },
  {
    index: 46,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 38,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 54
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 54
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 54
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 54
      }
    ]
  },
  {
    index: 47,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 39,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 55
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 55
      }
    ]
  },
  {
    index: 48,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 40,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 56
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 56
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 56
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 56
      }
    ]
  },
  {
    index: 49,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 41,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 57
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 57
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 57
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 57
      }
    ]
  },
  {
    index: 50,
    heading: 'Working arrangements',
    question: 'Does your client have the right to decide your working hours?',
    p1: '',
    p2: '',
    provious: 42,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 58
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 58
      },
      {
        name: 'No, you and your client agree',
        value: 'c',
        aria_label: 'C',
        next: 58
      },
      {
        name: 'No, the work is based on agreed deadlines',
        value: 'd',
        aria_label: 'D',
        next: 58
      }
    ]
  },
  {
    index: 51,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 43,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 59
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 59
      }
    ]
  },
  {
    index: 52,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 44,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 60
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 60
      }
    ]
  },
  {
    index: 53,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 45,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 61
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 61
      }
    ]
  },
  {
    index: 54,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 46,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 62
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 62
      }
    ]
  },
  {
    index: 55,
    heading: 'Worker’s financial risk',
    question:
      'Will you have to fund any vehicle costs before your client pays you?',
    p1:
      'This can include purchasing, leasing, hiring, fuel and other running costs for this work. This does not include commuting or personal vehicle costs.',
    p2: '',
    provious: 47,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 63
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 63
      }
    ]
  },
  {
    index: 56,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 48,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 64
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 64
      }
    ]
  },
  {
    index: 57,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy equipment before your client pays you?',
    p1:
      'This can include heavy machinery or high-cost specialist equipment used for this work. This does not include laptops, tablets and phones.',
    p2: 'Vehicle costs are covered in the next question',
    provious: 49,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 65
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 65
      }
    ]
  },
  {
    index: 58,
    heading: 'Working arrangements',
    question:
      'Does your client have the right to decide where you do the work?',
    p1: '',
    p2: '',
    provious: 50,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 66
      },
      {
        name: 'No, you solely decide',
        value: 'b',
        aria_label: 'B',
        next: 66
      },
      {
        name: 'No, the task sets the location',
        value: 'c',
        aria_label: 'C',
        next: 66
      },
      {
        name:
          'No, some work has to be done in an agreed location and some can be your choice',
        value: 'd',
        aria_label: 'D',
        next: 66
      }
    ]
  },
  {
    index: 59,
    heading: 'Worker’s financial risk',
    question: 'Will you have to buy materials before your client pays you?',
    p1:
      'This can include items that form a lasting part of the work, or are left behind when you leave. This does not include items like stationery.',
    p2:
      'This question is most likely to be relevant to the construction industry.',
    provious: 43,
    status: false,
    options: [
      {
        name: 'Yes',
        value: 'a',
        aria_label: 'A',
        next: 67
      },
      {
        name: 'No',
        value: 'b',
        aria_label: 'B',
        next: 67
      }
    ]
  }
];
