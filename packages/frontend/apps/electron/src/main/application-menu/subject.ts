import { Subject } from 'rxjs';

export const applicationMenuSubjects = {
  newPageAction$: new Subject<'page' | 'edgeless' | undefined>(),
  openJournal$: new Subject<void>(),
  openInSettingModal$: new Subject<{
    activeTab: string;
    scrollAnchor?: string;
  }>(),
};
