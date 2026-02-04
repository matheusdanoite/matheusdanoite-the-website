import React from 'react';
import styled from 'styled-components';
import { Anchor } from 'react95';

const PostItem = styled.li`
    padding: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.borderLight};
    display: flex;
    gap: 10px;
    
    &:last-child {
        border-bottom: none;
    }

    &:hover {
        background: ${({ theme }) => theme.hoverBackground};
        color: ${({ theme }) => theme.canvasTextInvert};
    }
`;

const Avatar = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid ${({ theme }) => theme.borderDark};
    flex-shrink: 0;
`;

const ContentColumn = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    font-size: 0.8rem;
`;

const AuthorName = styled.span`
    font-weight: bold;
    margin-right: 5px;
`;

const Handle = styled.span`
    opacity: 0.7;
    font-size: 0.75rem;
`;

const Time = styled.span`
    opacity: 0.7;
    font-size: 0.75rem;
    white-space: nowrap;
`;

const PostText = styled.p`
    margin: 0;
    line-height: 1.3;
    word-wrap: break-word;
`;

const QuoteBox = styled.div`
    border: 2px solid ${({ theme }) => theme.borderDark};
    padding: 8px;
    margin-top: 5px;
    background: rgba(255, 255, 255, 0.1);
    font-size: 0.85rem;
`;

const ImageGrid = styled.div`
    display: flex;
    gap: 5px;
    margin-top: 5px;
    flex-wrap: wrap;
`;

const PostImage = styled.img`
    max-width: 100%;
    max-height: 150px;
    border: 1px solid ${({ theme }) => theme.borderDark};
    object-fit: cover;
    border-radius: 4px;
`;

const ExternalLinkCard = styled(Anchor)`
    display: block;
    border: 1px solid ${({ theme }) => theme.borderDark};
    margin-top: 5px;
    text-decoration: none;
    color: inherit;
    
    &:hover {
        background: rgba(255, 255, 255, 0.2);
    }
`;

const ExternalThumb = styled.img`
    width: 100%;
    height: 100px;
    object-fit: cover;
    border-bottom: 1px solid ${({ theme }) => theme.borderDark};
`;

const ExternalInfo = styled.div`
    padding: 8px;
`;

const ExternalTitle = styled.div`
    font-weight: bold;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const ExternalDescription = styled.div`
    font-size: 0.75rem;
    opacity: 0.8;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
`;

const ReplyIndicator = styled.div`
    font-size: 0.75rem;
    opacity: 0.6;
    margin-bottom: 2px;
`;

const BlueSkyPost = ({ post }) => {
    const record = post.record;
    const isReply = !!record.reply;
    const date = new Date(record.createdAt).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit' });

    const getPostUrl = (postData) => {
        const rkey = postData.uri.split('/').pop();
        return `https://bsky.app/profile/${postData.author.handle}/post/${rkey}`;
    };

    const renderImages = (images) => {
        if (!images || images.length === 0) return null;
        return (
            <ImageGrid>
                {images.map((img, i) => (
                    <PostImage key={i} src={img.thumb} alt={img.alt} />
                ))}
            </ImageGrid>
        );
    };

    const renderExternal = (external) => {
        if (!external) return null;
        return (
            <ExternalLinkCard href={external.uri} target="_blank">
                {external.thumb && <ExternalThumb src={external.thumb} />}
                <ExternalInfo>
                    <ExternalTitle>{external.title}</ExternalTitle>
                    <ExternalDescription>{external.description}</ExternalDescription>
                </ExternalInfo>
            </ExternalLinkCard>
        );
    };

    const renderQuote = (rec, author) => {
        return (
            <QuoteBox>
                <div style={{ marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Avatar src={author.avatar} style={{ width: '20px', height: '20px', borderWidth: '1px' }} />
                    <strong>{author.displayName || author.handle}</strong>
                    <span style={{ opacity: 0.6, fontSize: '0.75rem' }}>@{author.handle}</span>
                </div>
                <div>{rec.text}</div>
            </QuoteBox>
        );
    };

    const renderEmbed = (embed) => {
        if (!embed) return null;

        // Images
        if (embed.$type === 'app.bsky.embed.images#view') {
            return renderImages(embed.images);
        }

        // External Link
        if (embed.$type === 'app.bsky.embed.external#view') {
            return renderExternal(embed.external);
        }

        // Quote Post
        if (embed.$type === 'app.bsky.embed.record#view') {
            const rec = embed.record;
            if (rec.$type === 'app.bsky.embed.record#viewRecord') {
                return renderQuote(rec.value, rec.author);
            }
            if (rec.$type === 'app.bsky.embed.record#viewNotFound') {
                return <QuoteBox style={{ fontStyle: 'italic', opacity: 0.6 }}>Post removido ou não encontrado.</QuoteBox>;
            }
        }

        // Record with Media (e.g. quote + images)
        if (embed.$type === 'app.bsky.embed.recordWithMedia#view') {
            return (
                <>
                    {renderEmbed(embed.media)}
                    {renderEmbed(embed.record)}
                </>
            );
        }

        return null;
    };

    return (
        <PostItem>
            <Avatar src={post.author.avatar} alt={post.author.handle} />

            <ContentColumn>
                {isReply && (
                    <ReplyIndicator>
                        Resposta ao post...
                    </ReplyIndicator>
                )}

                <Header>
                    <div>
                        <AuthorName>{post.author.displayName || post.author.handle}</AuthorName>
                        <Handle>@{post.author.handle}</Handle>
                    </div>
                    <Time>{date}</Time>
                </Header>

                {/* Main Post Link Wrapper */}
                <PostText>{record.text}</PostText>
                {renderEmbed(post.embed)}
            </ContentColumn>
        </PostItem>
    );
};

export default BlueSkyPost;
