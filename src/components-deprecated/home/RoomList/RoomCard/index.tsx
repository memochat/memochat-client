import styled from '@emotion/styled';

import { Icon } from '@src/components-deprecated/reusable';
import { getRoomIconImageUrlByType } from '@src/helpers/room';
import { breakpoints } from '@src/themes/breakpoints';
import { RoomType } from '@src/types/api/room';

const getLastChatByChatType = (type: ChatType, text = ''): string => {
  if (type === 'image') {
    return '이미지 메모';
  }
  if (type === 'video') {
    return '동영상 메모';
  }

  return text;
};

/** @TODO interface로 옮겨질 타입들  */
export type ChatType = 'text' | 'image' | 'video' | 'link' | 'todo';

interface RoomCardProps {
  /** @TODO db 구조에 따름 */
  type: RoomType;
  title: string;
  /** @Note : 마지막 채팅 타입에 따라 달라짐 (백에서 어떻게 보내줄지에 따라 달라질듯) */
  lastChat?: {
    /** @TODO db 구조에 따름 */
    type: ChatType;
    text?: string;
  };
  isSelected: boolean;
  isPinned?: boolean;
  hasReminder?: boolean;
  className?: string;
}

const RoomCard: React.FC<RoomCardProps> = ({
  isSelected,
  type,
  title,
  isPinned,
  lastChat,
  hasReminder,
  className,
}) => {
  return (
    <Wrapper className={className}>
      <SelectButton type="button" aria-selected={isSelected}>
        <Profile>
          <img src={getRoomIconImageUrlByType(type)} alt={`${type} 타입`} />
        </Profile>
        {isSelected && <SelectedText>작성중</SelectedText>}
      </SelectButton>
      <Content>
        <div>
          <Title>
            <b>{title}</b>
            {isPinned && <Icon name="Pin" />}
          </Title>
          <LastChat>
            {lastChat ? getLastChatByChatType(lastChat.type, lastChat.text) : ' '}
          </LastChat>
        </div>
        {hasReminder && <ReminderIcon src="images/alarm.png" alt="알림" />}
      </Content>
    </Wrapper>
  );
};

export default RoomCard;

const Wrapper = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 5.6rem;

  overflow: hidden;
`;

const SelectButton = styled.button`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 0.8rem;
  margin-left: 1.6rem;
  width: 3.2rem;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.8rem;

  background-color: ${(p) => p.theme.color.purple5};

  & > img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

const SelectedText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.4rem;
  height: 2rem;
  margin-top: 0.6rem;
  border-radius: 0.8rem;

  background-color: ${(p) => p.theme.color.blue1};
  color: ${(p) => p.theme.color.white};
  font-size: 0.8rem;
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 100%;
  border-radius: 1.6rem;
  padding: 1.2rem 1.6rem;
  margin-right: 1.6rem;

  background-color: ${(p) => p.theme.color.gray6};

  > div:first-child {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 70%;

    ${breakpoints.small} {
      width: 65%;
    }
  }
`;

const ReminderIcon = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  margin-left: auto;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  > b {
    color: ${(p) => p.theme.color.gray3};
    font-size: 1.2rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  & > svg {
    flex-shrink: 0;
    width: 1rem;
    height: 1rem;
    margin-left: 0.8rem;
    fill: ${(p) => p.theme.color.purple2};
  }
`;

const LastChat = styled.p`
  margin-top: 0.6rem;
  font-size: 1.2rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
