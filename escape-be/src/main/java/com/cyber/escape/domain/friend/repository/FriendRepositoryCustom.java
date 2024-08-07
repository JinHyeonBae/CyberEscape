package com.cyber.escape.domain.friend.repository;


import com.cyber.escape.domain.friend.dto.FriendDto;
import com.cyber.escape.domain.friend.dto.QFriendDto_FriendListResponse;
import com.cyber.escape.domain.friend.entity.QFriend;
import com.querydsl.core.Tuple;
import com.querydsl.jpa.JPAExpressions;

import java.util.List;
import java.util.UUID;

// QueryDsl의 기능을 정의한 인터페이스
public interface FriendRepositoryCustom {
    List<FriendDto.FriendListResponse> findFriendList(UUID uuid);
    void removeFriendAndInsertLogHistory(UUID currentUserId, UUID friendId);
}
